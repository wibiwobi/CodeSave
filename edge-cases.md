PAST FEATURE EDGE CASES


SAVING

- version block name is empty -> user presses the save button --- DONE ---
  * disable the save button and put a note: version block name should not be empty

BE TO DB
- user presses the save button -> backend saves the code, but its the same code, difference is only the spaces
  :NOTE comparing the code only applies to one version back, v2 is compared to v1, v3 is compared to v2
  * fiter the code, in a way that spaces are not included in the string


CLICKING ONE VERSION BLOCK
- 


INITIAL RENDER (URL IS EXIST ALREADY) and CLICKING A VERSION BLOCK
- fetched all the version blocks, every version block is unsorted
- all rows are empty --- DONE ---
   * check if its empty


USER PRESSED A VERSION BLOCK -> USER WANTS TO SEE THE CURRENT CODE
  * call the BE to fetch the code (calls the backend frequently IF user keeps pressing a version block many times then he presses a button to see the current code again)
  * cache the current code 

--- THIS HAPPENS WHEN THE SAVE BUTTON IS PRESSED ---

input
- mouse click - event
- version block name - text

output
- version block in the right panel - (version block name, time, date)


blocks
- exit button
- save button
- form input
  - label name (Version block name)

backEndRequestFunc
   


if user pressed the save button
  1. pop up the form (blocks) -> make the bg grayed out except for the form 
  while (waiting for user to enter an input)
     if user pressed the exit button: get rid of the pop up form and gray bg THEN EXIT THIS WHOLE THING 
     if input is empty - "" or undefined
        1. Disable the save button
        2. show a warning message that input should not be empty
     while (form has an input)
        if the user pressed the save button
           1. get rid of the form and gray background
           2. go to backendRequestFunc
           3. got to displayVersionBlockFunc THEN EXIT THIS WHOLE THING 

else
  1. nothing happens