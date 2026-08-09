function InfoSection(props){
    const { people } = props;
    return ( // FIXED: Added parentheses around JSX
        <div style={{ padding: '20px', display: 'flex', alignItems: 'center' }}>
            <b style={{ fontSize: '28px' }}>{people.length}</b>
            <span style={{ fontSize: '14px', marginLeft: '10px' }}>User Results</span>
        </div>
    );
}

export default InfoSection;