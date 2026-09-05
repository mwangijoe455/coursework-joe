import { FormControlLabel, Switch } from '@mui/material';
import styles from './Filter.module.css';

function Filter({ showAvailableOnly, onToggle }) {
  return (
    <div className={styles.filter}>
      <FormControlLabel
        control={
          <Switch
            checked={showAvailableOnly}
            onChange={(e) => onToggle(e.target.checked)}
            color="primary"
          />
        }
        label="Show available products only"
      />
    </div>
  );
}

export default Filter;