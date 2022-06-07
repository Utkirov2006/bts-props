export default function Cards(props) {
    console.log(props.name);
    return (
        <div className="card" style={{ background: "silver", color: "red", display: `${props.show ? "inline-block" : "none"}` }}>

            <img src={props.img} alt="bts" className="avatar" />
            

            <h2 className="name">{props.name}</h2>

            <h4>{props.num}</h4>
            <p>{props.job}</p>
            <p>{props.children}</p>

            <button className="btn">Add User</button>
        </div>
    )
}