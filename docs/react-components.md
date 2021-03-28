# React component guide line

## How to convert HTML to JSX?

1. JSX allow only one parent. So we have to use `React.Fragment` to be a parent.

   ```jsx
   // NO 
   const Rooms = () => (
     <Room />
     <Room />
   )
   
   // YES
   const Rooms = () => (
     <>
       <Room />
       <Room />
     </>
   )
   ```

2. Use `className` instead of `class`

   ```jsx
   // NO
   <div class="float-right my-4 d-flex align-items-center">...</div>
   
   // YES
   <div className="float-right my-4 d-flex align-items-center">...</div>
   ```

3. We can use `style` props for React component

   ```jsx
   // NO
   <div style="display: inline-block;">...</div>
   
   // YES
   <div style={{ display: 'inline-block' }}>...</div>
   ```