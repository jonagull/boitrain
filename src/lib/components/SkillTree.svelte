<script lang="ts">
    import { onMount } from "svelte";
    import * as d3 from "d3";
    import type { Exercise } from "../types/Exercise";

    export let data: Exercise;

    let svg: SVGElement;
    const width = 2000; // Increased canvas size
    const height = 2000;
    const radius = Math.min(width, height) / 2 - 200; // More padding from edges

    // Add some styling constants
    const nodeColors = {
        default: "#fff",
        hover: "#f0f0f0",
        stroke: "#000",
    };

    // Add hexagon helper function
    function hexagonPath(size: number): string {
        // Create a regular hexagon path
        const angle = (2 * Math.PI) / 6;
        const points = Array.from({ length: 6 }, (_, i) => {
            const x = size * Math.cos(i * angle - Math.PI / 2);
            const y = size * Math.sin(i * angle - Math.PI / 2);
            return `${x},${y}`;
        });
        return `M ${points.join(" L ")} Z`;
    }

    // Make nodes even smaller
    const nodeSize = {
        default: 15, // Reduced size
        hover: 18,
    };

    // Update icon mapping
    const iconMap: Record<string, string> = {
        pushups: "/pushups-icon.svg",
        pullups: "/pullups-icon.svg",
        dips: "/dips-icon.svg",
        planks: "/planks-icon.svg",
        squats: "/squats-icon.svg",
        lsits: "/lsits-icon.svg",
        levers: "/levers-icon.svg",
        bridges: "/bridges-icon.svg",
        legraises: "/legraises-icon.svg",
        handstands: "/handstands-icon.svg",
        running: "/running-icon.svg",
        flexibility: "/flexibility-icon.svg",
        core: "/default-exercise-icon.svg", // fallback for root node
    };

    function getIconPath(exercise: Exercise): string {
        return iconMap[exercise.icon || ""] || "/default-exercise-icon.svg";
    }

    onMount(() => {
        const svgElement = d3.select(svg);
        svgElement.selectAll("*").remove();

        // Create tooltip div
        const tooltip = d3
            .select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        const g = svgElement
            .append("g")
            .attr("transform", `translate(${width / 2},${height / 2})`);

        // Adjust the tree layout settings
        const tree = d3
            .tree<Exercise>()
            .size([2 * Math.PI, radius])
            .separation((a, b) => {
                // Increase separation based on depth and relationship
                const depth = a.depth;
                const siblingFactor = a.parent === b.parent ? 1 : 2;
                // Exponentially increase space for outer rings
                const depthFactor = Math.pow(1.5, depth);
                return Math.max(siblingFactor * depthFactor, 2);
            });

        // Generate the tree data
        const root = d3.hierarchy(data);
        const treeData = tree(root);

        // Add links first (so they appear behind nodes)
        g.selectAll(".link")
            .data(treeData.links())
            .join("path")
            .attr("class", "link")
            .attr(
                "d",
                d3
                    .linkRadial()
                    .angle((d) => d.x)
                    .radius((d) => d.y)
            );

        // Create nodes
        const nodes = g
            .selectAll(".node")
            .data(treeData.descendants())
            .join("g")
            .attr("class", "node")
            .attr(
                "transform",
                (d) =>
                    `translate(${d.y * Math.cos(d.x - Math.PI / 2)},${d.y * Math.sin(d.x - Math.PI / 2)})`
            );

        // Create node groups with hover effects
        const nodeGroups = nodes
            .append("g")
            .attr("class", "node-group")
            .on("mouseover", function (event, d) {
                // Show and position tooltip
                tooltip.transition().duration(200).style("opacity", 1);
                tooltip
                    .html(d.data.name)
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY - 10 + "px");

                // Highlight node
                d3.select(this)
                    .select("path")
                    .transition()
                    .duration(300)
                    .attr("d", hexagonPath(nodeSize.hover))
                    .style(
                        "filter",
                        "drop-shadow(3px 3px 3px rgba(0,0,0,0.3))"
                    );
            })
            .on("mouseout", function () {
                // Hide tooltip
                tooltip.transition().duration(500).style("opacity", 0);

                // Reset node
                d3.select(this)
                    .select("path")
                    .transition()
                    .duration(300)
                    .attr("d", hexagonPath(nodeSize.default))
                    .style(
                        "filter",
                        "drop-shadow(2px 2px 2px rgba(0,0,0,0.2))"
                    );
            });

        // Add hexagon backgrounds
        nodeGroups
            .append("path")
            .attr("d", hexagonPath(nodeSize.default))
            .style("fill", (d) => d.data.color || nodeColors.default)
            .style("stroke", nodeColors.stroke);

        // Add icons with fixed positioning
        nodeGroups
            .append("image")
            .attr("xlink:href", (d) => getIconPath(d.data))
            .attr("width", nodeSize.default * 1.2) // Slightly bigger than node
            .attr("height", nodeSize.default * 1.2)
            .attr("x", -nodeSize.default * 0.6) // Center the icon
            .attr("y", -nodeSize.default * 0.6)
            .style("pointer-events", "none"); // Prevent hover interference
    });

    // Helper function to convert polar to Cartesian coordinates
    function radialPoint(x: number, y: number) {
        return [(y = +y) * Math.cos((x -= Math.PI / 2)), y * Math.sin(x)];
    }
</script>

<div class="skill-tree-container">
    <svg
        bind:this={svg}
        {width}
        {height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
    />
</div>

<style>
    .skill-tree-container {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f5f5f5;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }

    :global(.tooltip) {
        position: absolute;
        padding: 8px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        border-radius: 4px;
        font-size: 14px;
        pointer-events: none;
        z-index: 100;
        max-width: 200px;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    :global(.link) {
        fill: none;
        stroke: #999;
        stroke-width: 2px;
        opacity: 0.6;
        transition: all 0.3s ease;
    }

    svg {
        max-width: 100%;
        max-height: 100%;
        height: auto;
    }

    :global(.node-group) {
        pointer-events: all;
        cursor: pointer;
    }

    :global(.node-group path) {
        stroke-width: 2px;
        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
        transition: all 0.3s ease;
    }

    :global(.node-group image) {
        opacity: 0.8;
        /* Remove transform-origin and transform to prevent movement */
    }

    :global(.node-group:hover image) {
        opacity: 1;
        /* Remove transform to prevent movement */
    }
</style>
