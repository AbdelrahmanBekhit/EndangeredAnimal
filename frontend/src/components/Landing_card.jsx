function landing_card(props){
    const { name } = props;
    return(
        <div className="flex flex-col items-center bg-[#a8a793] rounded-2xl p-5 hover:p-2 hover:cursor-pointer w-[200px] h-[220px]" >
            <span className="mt-2 font-bold">{name}</span>
            <img src={`../../public/${name}.png`} alt={name} className="w-40 h-40 object-contains" />
        </div>
    )
}

export default landing_card