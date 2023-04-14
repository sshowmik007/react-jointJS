import React, { useEffect, useRef } from "react";
import * as joint from "jointjs";

const JointJSExample = () => {
	const holderRef = useRef(null);

	useEffect(() => {
		const namespace = joint.shapes;
		const graph = new joint.dia.Graph({}, { cellNamespace: namespace });
		const paper = new joint.dia.Paper({
			el: holderRef.current,
			model: graph,
			width: 600,
			height: 600,
			gridSize: 10,
			drawGrid: true,
			background: {
				color: "rgba(0, 255, 0, 0.3)",
			},
			cellViewNamespace: namespace,
		});

		// Rectangle
		const rect = new joint.shapes.standard.Rectangle();
		rect.position(100, 30);
		rect.resize(100, 40);
		rect.attr({
			body: {
				fill: "blue",
			},
			label: {
				text: "Hello Rectangle",
				fill: "white",
			},
		});
		rect.addTo(graph);

		// Circle
		const circle = new joint.shapes.standard.Circle();
		circle.position(250, 40);
		circle.resize(100, 100);
		circle.attr({
			body: {
				fill: "green",
			},
			label: {
				text: "Hello Circle",
				fill: "white",
			},
		});
		circle.addTo(graph);

		// Ellipse
		const ellipse = new joint.shapes.standard.Ellipse();
		ellipse.position(350, 40);
		ellipse.resize(100, 60);
		ellipse.attr({
			body: {
				fill: "orange",
			},
			label: {
				text: "Hello Ellipse",
				fill: "white",
			},
		});
		ellipse.addTo(graph);

		// Link
		const link = new joint.shapes.standard.Link();
		link.source(rect);
		link.target(circle);
		link.addTo(graph);

		const link2 = new joint.shapes.standard.Link();
		link2.source(circle);
		link2.target(ellipse);
		link2.addTo(graph);
	}, []);

	return <div ref={holderRef}></div>;
};

export default JointJSExample;
