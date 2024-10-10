import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Search = () => {
    return (
        <>
            <form action="/search">
                <div className="input-group">
                    <input type="text" placeholder="Search...." name="" id="" className="form-control" />
                    <button type="submit" className="btn btn-dark input-group-btn"><SearchOutlinedIcon fontSize='medium' /></button>
                </div>
            </form>

        </>
    )
}

export default Search
