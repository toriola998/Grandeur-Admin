export default function OptionsDropdown({ view, edit, deleteItem }) {
   return (
      <div className="dropdown">
         <ul>
            <li>
               <button onClick={view}>
                  <span className="material-symbols-outlined">visibility</span>
                  View
               </button>
            </li>
            <li>
               <button onClick={edit}>
                  <span className="material-symbols-outlined">edit</span>
                  Edit
               </button>
            </li>
            <li>
               <button className="text-red" onClick={deleteItem}>
                  <span className="material-symbols-outlined">delete</span>
                  Delete
               </button>
            </li>
         </ul>
      </div>
   );
}
