function landing_card(props){
    const { name } = props;
    return(
        <div className="flex flex-col items-center bg-[#a8a793] rounded-2xl p-5 hover:p-7 hover:cursor-pointer">
            <span className="mt-2 font-bold">{name}</span>
            <img src={`../../public/${name}.png`} alt={name} className="w-50" />
        </div>
    )
}

export default landing_card