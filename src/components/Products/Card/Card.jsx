import { FaBeer } from "@react-icons/all-files/fa/FaBeer"
function Card({key1,img,title,star,reviews,prevPrice,newPrice}) {
    return (
        <div className="card flex_column" key={key1}>
            <div className="image_container">
                <img src={img} alt="test"/>
            </div>
            <div className="card_content">
                <h2>{title}</h2>
                <div className="flex align_center ">
                    <span>{star}</span>
                    <span>{star}</span>
                    <span>{star}</span>
                    <span>{star}</span>
                    <span className="reviewes">{reviews}</span>
                </div>
                <div className="flex align_center justify_between">
                    <p><span className="prev_price">{prevPrice}</span> {newPrice}</p>
                    <span><FaBeer /></span>
                </div>
            </div>
        </div>
    )
}

export default Card