function Rainbow(WrappedComponent) {
    const colours = [ 'red', 'pink', 'orange', 'blue', 'green', 'yellow']
    const randomColor = colours[Math.floor(Math.random() * 6)]
    const className = randomColor + '-text'

    console.log(randomColor)
    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow
