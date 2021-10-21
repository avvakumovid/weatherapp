const Main = (props) => {
    return (
        <div>{props.data?.name}<img alt={'icon'} src={`http://openweathermap.org/img/wn/${props.data?.weather[0].icon}@2x.png`}/></div>
    )
}

export default Main;