import { useNavigate } from "react-router-dom";

function AlbumItem({ image, name, desc, id }){
    const navigate = useNavigate();
    return (
        <div key={id} onClick={() => navigate(`/album/${id}`)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] ">
            <img className="w-32 h-32 object-cover rounded" src={image} alt="album img" />
            <p className="font-bold mt-2 mb-1 text-sm">{name}</p>
            <p className="text-slate-200 text-sm">{desc}</p>
        </div>
    )
}

export default AlbumItem