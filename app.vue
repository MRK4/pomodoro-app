<template>
  <main class="bg-neutral h-full w-full flex flex-col justify-center items-center" data-theme="coffee">
    <section class="h-full w-full flex flex-col justify-center items-center space-y-6 prose">

      <h1 class="text-primary">Pomodoro App</h1>

      <span class="p-8 bg-base-100 flex flex-col justify-center items-center space-y-9 rounded-xl shadow-xl">
        <h2 class="my-0 text-primary">Timer</h2>

        <div class="radial-progress text-primary" style="--value:70;--size:8rem;">
          <span>
            <span id="minutes">50</span>:<span id="seconds">00</span>
          </span>
        </div>

        <span class="flex flex-col lg:flex-row justify-between items-center space-x-6">
          <div class="tooltip tooltip-bottom tooltip-neutral" data-tip="Start de timer">
            <button class="font-bold btn btn-primary">START</button>
          </div>

          <div class="tooltip tooltip-bottom tooltip-neutral" data-tip="Pause the timer">
            <button class="font-bold btn btn-neutral">PAUSE</button>
          </div>

          <div class="tooltip tooltip-bottom tooltip-neutral" data-tip="Restart the timer">
            <button class="font-bold btn btn-neutral">RESET</button>
          </div>
        </span>

        <!-- The button to open modal -->
        <label for="my-modal" class="text-xs link link-primary link-hover">What is that ?</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">What is Pomodoro ?</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div class="modal-action">
              <label for="my-modal" class="btn">Ok let's try it !</label>
            </div>
          </div>
        </div>

      </span>

    </section>
  </main>
  <Footer/>
</template>

<style>
body{
  height: 100%;
  width: 100%;
}
#__nuxt{
  height: 100%;
  width: 100%;
}
:root{
  height: 100%;
  width: 100%;
}
</style>