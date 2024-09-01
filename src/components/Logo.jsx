export function Logo(props) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }} {...props}>
            <img
                src="/desarrollamelo/desarrollamelo.png"
                alt="Descripción del logo"
                width={35}
            />
            <p style={{ color: 'white', marginLeft: '10px' }}>YovanEnovore</p>
        </div>
    )
}
