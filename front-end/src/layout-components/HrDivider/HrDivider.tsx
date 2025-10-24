import styles from './HrDivider.module.css';

export function HrDivider({ className } : { className?: string }){
    return (
        <hr className={`${styles.dividerLine} ${className}`} />
    )
}