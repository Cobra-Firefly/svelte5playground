<ul class="carousel-list">
	<li class="carousel-item"><div class="content">Item 1</div></li>
	<li class="carousel-item"><div class="content">Item 2</div></li>
	<li class="carousel-item"><div class="content">Item 3</div></li>
	<li class="carousel-item"><div class="content">Item 4</div></li>
	<li class="carousel-item"><div class="content">Item 5</div></li>
</ul>

<style>
	.carousel-list {
		display: flex;
		gap: 8px;
		padding: 16px;

		list-style: none;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
	}

	.carousel-item {
		flex-shrink: 0;
		width: 80%;
		height: 90vh;

		background-color: #fff;

		scroll-snap-align: center;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;

		font-family: sans-serif;
		font-size: 64px;
		font-weight: bold;
	}
</style>
