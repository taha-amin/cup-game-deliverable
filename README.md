## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

PLAN
1. Retrieve pictures of cups and cup with ball

2. Write out HTML template
  - h1 header for title - (GUESS WHERE THE BALL IS?)
  - 3 images (2 without ball and 1 with ball)
  - 3 btns underneath the images
  - Show the user their:
    - total guesses
    - wins
    - losses
    
3. Style css

4. work on app.js file
  - grab my DOM elements
    - button elements
    - total wins, total guesses, and total losses elements
    - cup images elements (cup-one, cup-two, cup-three)
  - create my let states
    - let correct guesses = 0;
    - let total guesses = 0;
  - create random hiding spot function
    - create random number generator (between index 0 thru 2)
  - create event listeners
  - create handle guess function 