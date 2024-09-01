export function Logo(props) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }} {...props}>
            <img
                src="/desarrollamelo/desarrollamelo.png"
                alt="Descripción del logo"
                width={35}
            />
            <p
                style={{ marginLeft: '10px' }}
                className="dark:text-zinc-400"
            >YovanEnovore</p>
        </div>
    )
}
