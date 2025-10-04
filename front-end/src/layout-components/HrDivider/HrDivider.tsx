import styles from './HrDivider.module.css';

export function HrDivider(){
    return (
        <hr className={`${styles.dividerLine} mt-5`} />
    )
}