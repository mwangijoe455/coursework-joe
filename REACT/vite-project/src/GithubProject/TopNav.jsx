import { useState } from "react";

function TopNav() {
    const [search, setSearch] = useState('');

    return (
        <div className="" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
                style={{ width: '40px' }}
                src="https://toppng.com/uploads/preview/github-logo-png-photo-11659780047rlwsegmg72.png"
            />
            <input 
                style={{ width: '50vw', marginLeft: '2em' }} 
                value={search} // FIXED: search → value
                onChange={(e) => setSearch(e.target.value)} // FIXED: Added onChange
            />
            <button>Search</button>
        </div>
    );
}

export default TopNav;