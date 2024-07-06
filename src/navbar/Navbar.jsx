
const Navbar = () => {
    return(
        <div class="flex justify-between bg-gray-700">
            <div >
                <h1 className="text-4xl font-bold text-blue-500">Ekathrass</h1>
            </div>
            <div>
               <ul style={{listStyle:"none",display:"flex",}}>
                <li><a style={{ textDecoration:"none",marginRight:"100px"}} href="/home">home</a></li>
                <li><a style={{ textDecoration:"none",marginRight:"100px"}} href="/services">services</a></li>
                <li><a style={{ textDecoration:"none",marginRight:"100px"}} href="/about">about</a></li>
                <li><a style={{ textDecoration:"none",marginRight:"100px"}} href="/Contact">Contact</a></li>
               </ul>
            </div>

        </div>
    )
};
export default Navbar;
