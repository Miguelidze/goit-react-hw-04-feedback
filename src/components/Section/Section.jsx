import s from './Section.module.css';

export default function Section({ title, children }) {
    return (
        <div className={s.section}>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    )
} 