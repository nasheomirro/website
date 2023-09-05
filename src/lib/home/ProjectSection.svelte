<script>
	import ProjectItem from './ProjectItem.svelte';
</script>

<section>
	<div class="py-20 space-y-14 md:space-y-24 flex flex-col centered">
		<ProjectItem
			i={1}
			src="/project-react-polymorphed.jpg"
			alt="react-polymorphed graphic"
			firstLink="https://github.com/nasheomirro/react-polymorphed"
			secondLink="https://www.npmjs.com/package/react-polymorphed"
			isPackage
		>
			A typescript package to create polymorphic components
		</ProjectItem>

		<ProjectItem
			i={2}
			src="/project-gradials.jpg"
			alt="a preview of the gradial application"
			firstLink="https://github.com/nasheomirro/gradials-2"
			secondLink="https://gradials.nasheomirro.dev"
		>
			A tool to generate stunning radial backgrounds
		</ProjectItem>

		<ProjectItem
			i={3}
			src="/project-pomodoro.jpg"
			alt="a preview of the pomodoro web application"
			firstLink="https://github.com/nasheomirro/pomodoro"
			secondLink="https://pomodoro.nasheomirro.dev"
		>
			A pomodoro timer made with react
		</ProjectItem>

		<ProjectItem
			i={4}
			src="/project-kanban.jpg"
			alt="a preview of the kanban web application"
			firstLink="https://github.com/nasheomirro/kanban"
			secondLink="https://kanban.nasheomirro.dev"
		>
			A kanban board with sveltekit
		</ProjectItem>
	</div>
</section>
