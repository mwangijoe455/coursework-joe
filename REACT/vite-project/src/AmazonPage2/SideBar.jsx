
import FilterList from './FilterList';
function SideBar(){
return(
    <div
    style={{
        display: 'flex',
        width: 'auto',
        flexDirection: 'column',
    }}
    >
        <FilterList title={"Conditions"} options={['New', 'Used','Renewed']}/>
        <FilterList title={"Material"} options={['Plastic', 'Rubber','PVC', 'Aluminium']}/>
        <FilterList title={"Exercise"} options={['Speed & Endurance', 'Boxing','Body Building', 'Martial Arts']}/>
        <FilterList title={"Brand"} options={['Cross rope', 'Venum','Sport bit', 'Adidas']}/>
    </div>
);
}
export default SideBar;