At its core, this code creates a stopwatch by precisely measuring the passage of time in milliseconds and then converting that into a human-readable format.

# The Core Idea: Tracking Time

The magic of this stopwatch lies in how it tracks time. Instead of trying to count every millisecond (which can be inaccurate), it uses timestamps.

* `Date.now()`: This is the key function. It returns the number of milliseconds that have passed since January 1, 1970 (a standard reference point in computing called the Unix Epoch).
* **`startTime`**: This variable stores the exact timestamp when you hit the "start" button.
* **`elapsedTime`**: This variable holds the total time that has passed since the stopwatch started running. It's constantly being calculated.

The fundamental logic is simple: **`elapsedTime = currentTime - startTime`**. By subtracting the start time from the current time, you get the exact duration the stopwatch has been running.

---

### How the Functions Work

Let's look at what each function does with this time-tracking logic.

#### `start()`

* `if(!isRunning)`: This checks if the stopwatch is already running. This prevents you from starting it multiple times, which would mess up the `startTime`.
* `startTime = Date.now() - elapsedTime;`: This is a clever bit.
    * **On the first start**: `elapsedTime` is 0, so `startTime` is set to the current moment (`Date.now()`).
    * **When resuming from a pause**: `elapsedTime` holds the time that passed before you hit "stop". By subtracting it from the current time, you effectively adjust the `startTime` backward. This ensures that when you resume, the timer doesn't jump ahead but continues from where it left off.
* `timer = setInterval(update, 10);`: This is the engine of the stopwatch. It calls the `update` function every 10 milliseconds. This repeated call is what makes the display refresh continuously.
* `isRunning = true;`: This flag is set to `true` so the program knows the stopwatch is active.

#### `stop()`

* `if(isRunning)`: This makes sure the code only runs if the stopwatch is currently ticking.
* `clearInterval(timer);`: This is the crucial step. It stops the `setInterval` from calling the `update` function every 10 milliseconds. The display freezes.
* `elapsedTime = Date.now() - startTime;`: It calculates the final `elapsedTime` from when you started (or resumed) to the exact moment you hit "stop". This value is saved.
* `isRunning = false;`: The flag is set to `false`, indicating the stopwatch is now paused.

#### `reset()`

This function simply puts everything back to its initial state.

* `clearInterval(timer);`: Stops any active timer.
* It resets all the global variables (`startTime`, `elapsedTime`, `isRunning`) to zero or `false`.
* `display.textContent = "00:00:00:00";`: It resets the text on the screen to all zeros.

---

### The `update()` Function: Making Time Readable

This function is called every 10 milliseconds by `setInterval` when the stopwatch is running. Its job is to calculate the current elapsed time and format it for the display.

1.  **Calculate Current Elapsed Time**:
    `const currentTime = Date.now();`
    `elapsedTime = currentTime - startTime;`
    This gets the most up-to-the-millisecond duration that the stopwatch has been active.

2.  **The Math Breakdown**: This is where the single large number (`elapsedTime` in milliseconds) is converted into hours, minutes, seconds, and hundredths of a second.

    * **Hours**: `Math.floor(elapsedTime / (1000 * 60 * 60))`
        * `1000 * 60 * 60` is the number of milliseconds in one hour. Dividing `elapsedTime` by this gives you the total hours.

    * **Minutes**: `Math.floor(elapsedTime / (1000 * 60) % 60)`
        * `elapsedTime / (1000 * 60)` gives you the total minutes that have passed.
        * The modulo operator (`% 60`) then gives you the *remainder* after dividing by 60. This is how you get just the minutes part of the current hour (e.g., 75 minutes total becomes 15).

    * **Seconds**: `Math.floor(elapsedTime / 1000 % 60)`
        * `elapsedTime / 1000` gives you the total seconds.
        * `% 60` gives you the remainder, which is the seconds part of the current minute.

    * **Milliseconds**: `Math.floor(elapsedTime % 1000 / 10)`
        * `elapsedTime % 1000` gives you the millisecond remainder (from 0 to 999).
        * Dividing by `10` converts this to a two-digit number (0 to 99), which is common for stopwatches.

3.  **Formatting the Display**:

    * `String(hours).padStart(2, "0")`: This is for aesthetics. `padStart(2, "0")` ensures that the number is always two digits. If `hours` is `7`, it becomes `"07"`. If it's `12`, it stays `"12"`. This keeps the display looking clean and uniform.

    * `display.textContent = ...`: Finally, the code constructs the familiar `HH:MM:SS:MS` string and updates the HTML element on the webpage.

In short, the program uses precise start and end timestamps to calculate the total elapsed time, and a recurring `update` function to constantly refresh the display with that time, neatly formatted.


# Live run example
You got it. Forget the abstract terms for a minute. Let's do a complete "live" run of the stopwatch with simple, example numbers. This will show you *exactly* how the variables change and interact when you click the buttons.

Let's imagine `Date.now()` gives us simple numbers to work with, starting at **100,000**.

### Scene 1: The Page Loads

The moment you open the stopwatch, here's the state of the program:

* **`display` shows:** "00:00:00:00"
* **`timer`:** `null` (it's empty)
* **`startTime`:** `0`
* **`elapsedTime`:** `0`
* **`isRunning`:** `false`

Nothing is happening. It's waiting for you.

---

### Scene 2: You click START for the first time

Let's say you click "Start" when `Date.now()` is at **100,000** milliseconds.

The `start()` function runs:

1.  `if(!isRunning)`: Is `isRunning` false? Yes, it is. So the code inside runs.
2.  `startTime = Date.now() - elapsedTime;`
    * `Date.now()` is `100,000`.
    * `elapsedTime` is `0`.
    * So, `startTime` is set to `100,000 - 0 = **100,000**`.
3.  `timer = setInterval(update, 10);`: **The engine starts!** The program now calls the `update` function every 10 milliseconds.
4.  `isRunning` is set to `true`.

**A few moments later...** The `update` function is running over and over. Let's freeze time at the exact moment an `update` call happens, when `Date.now()` is **102,550**.

The `update()` function runs:

1.  `const currentTime = 102,550;`
2.  `elapsedTime = currentTime - startTime;`
    * `elapsedTime = 102,550 - 100,000 = **2,550**` milliseconds.
3.  **The math part:**
    * `hours` = `Math.floor(2550 / 3600000)` = `0`
    * `minutes` = `Math.floor(2550 / 60000) % 60` = `0`
    * `seconds` = `Math.floor(2550 / 1000) % 60` = `2`
    * `milliseconds` = `Math.floor(2550 % 1000 / 10)` = `Math.floor(550 / 10)` = `55`
4.  The code formats these numbers with `padStart`.
5.  **`display` now shows:** "00:00:02:55"

---

### Scene 3: You click STOP

You let it run for a bit, and you click "Stop" when `Date.now()` is at **107,000**.

The `stop()` function runs:

1.  `if(isRunning)`: Is `isRunning` true? Yes. The code runs.
2.  `clearInterval(timer);`: **The engine stops!** The `update` function will no longer be called. The display freezes at whatever it was showing last.
3.  `elapsedTime = Date.now() - startTime;`
    * `Date.now()` is `107,000`.
    * `startTime` is still `100,000`.
    * `elapsedTime` is now permanently set to `107,000 - 100,000 = **7,000**`. This value is **saved** for later.
4.  `isRunning` is set to `false`.

Now the stopwatch is paused. The display is frozen, but the program remembers that **7 seconds** (`7,000` ms) have passed.

---

### Scene 4: You click START again (Resume)

You wait a while. You click "Start" again when `Date.now()` is at **115,000**.

The `start()` function runs again:

1.  `if(!isRunning)`: Is `isRunning` false? Yes, it is (we stopped it). The code runs.
2.  `startTime = Date.now() - elapsedTime;` **<- THIS IS THE MAGIC!**
    * `Date.now()` is `115,000`.
    * `elapsedTime` is **`7,000`** (we saved this value when we hit stop).
    * So, `startTime` is set to `115,000 - 7,000 = **108,000**`.

> **Intuition Check:** Why did it do this? It's adjusting the start time to account for the pause. You were paused for 8 seconds (from 107,000 to 115,000). By subtracting the previously elapsed time, it creates a *new*, *fake* start time. The timer will now calculate its duration from this new point, so it looks like it never stopped.

3.  `timer = setInterval(update, 10);`: The engine starts again.
4.  `isRunning` is set to `true`.

**A moment later...** a new `update` call happens. Let's say `Date.now()` is **115,010**.

The `update()` function runs:

1.  `const currentTime = 115,010;`
2.  `elapsedTime = currentTime - startTime;`
    * `elapsedTime = 115,010 - 108,000` (our new start time!) `= **7,010**` milliseconds.
3.  **The math part:** This will calculate to `7` seconds and `01` hundredths of a second.
4.  **`display` now shows:** "00:00:07:01".

It worked! It seamlessly resumed from 7 seconds.

---

### Scene 5: You click RESET

You click "Reset" at any time.

The `reset()` function runs:

1.  `clearInterval(timer);`: Kills the engine if it's running.
2.  `startTime = 0;`
3.  `elapsedTime = 0;`
4.  `isRunning = false;`
5.  `display.textContent = "00:00:00:00";`

Everything is wiped clean, back to exactly how it was in Scene 1.

I hope this step-by-step example makes the logic click! You can see how the variables `startTime` and `elapsedTime` work together to correctly start, stop, and resume the timer.