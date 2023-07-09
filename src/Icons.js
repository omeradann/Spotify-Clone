const HomeIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} aria-hidden="true" class="Svg-sc-ytk21e-0 haNxPq home-active-icon" viewBox="0 0 24 24" data-encore-id="icon">
            <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"/>
        </svg>
    )
}

const SearchIcon = ({size}) => {
    return (
        <svg role="img" height={size} width={size} aria-hidden="true" class="Svg-sc-ytk21e-0 haNxPq search-icon" viewBox="0 0 24 24" data-encore-id="icon">
            <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"/>
        </svg>
    )
}
const CollectionIcon = ({size}) => {
    return (
<svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq">
    <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"/>
</svg>
    )
}
const NewPlaylistIcon = ({size}) => {
    return (
<svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq">
    <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z" fill="currentColor"></path>
</svg>
    )
}

const Icon = ({name, size = 24}) => {

    const icons = {
        home: HomeIcon,
        search: SearchIcon,
        collection: CollectionIcon,
        newplaylist: NewPlaylistIcon,
    }

    const Component = icons[name]
    return <Component size={size}/>
}

export {
    Icon
}