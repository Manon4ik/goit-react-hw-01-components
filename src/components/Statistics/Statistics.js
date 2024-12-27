import PropTypes from "prop-types";

export default function Statistics(props) {
    const { title, stats } = props;
    return (
        <section class="statistics">
            {title?.length > 0 &&
                <h2 className="title">{title}</h2>
            }

            <ul class="stat-list">
                {stats.map(({id, label, percentage}) => (
                    <li key={id} class="item">
                        <span class="label">{label}</span>
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