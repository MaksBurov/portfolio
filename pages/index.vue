<template>
	<div class="index  container">
		<Intro></Intro>

		<section class="index__write">
			<h2 class="index__subtitle">{{ $t("write-a-letter") }}</h2>
			<Write />
		</section>
	</div>
</template>

<style lang="scss">
.index__write {
	max-width: 800px;
	padding: 0 20px;
	margin: 5em auto 0;
}

.index__subtitle {
	text-align: center;
}
</style>