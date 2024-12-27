import PropTypes from "prop-types";
import s from "../Statistics/Statistics.module.css"
import randomColor from "randomcolor";

export default function Statistics({ title, stats }) {

    return (
        <section className={s.statistics}>
            {title?.length > 0 &&
                <h2 className={s.title}>{title}</h2>
            }

            <ul className={s.list}>
                {stats.map(({ id, label, percentage }) => (
                    <li key={id} className={s.item} style={{backgroundColor: randomColor()}}>
                        <span className={s.label}>{label}</span>
                        <span class="percentage">{percentage}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}