import Calendar from 'react-github-contribution-calendar'


const Contributions = () => {
    var panelAttributes = { rx: 6, ry: 6 };

    var values = {
        "2022-01-01": 1,
        "2022-02-01": 1,
        "2022-03-01": 1,
        "2022-04-01": 1,
        "2022-05-01": 1,
        "2022-06-01": 1,
        "2022-07-01": 1,
        "2022-08-01": 1,
        "2022-09-01": 1,
        "2022-10-01": 1,
        "2022-11-01": 1,
        "2022-12-01": 1
      };

      var until = "2022-12-31";

    return (
        <div>
            <Calendar
                values={values}
                panelAttributes={panelAttributes}
                until={until}
            />
        </div>
    )
}

export default Contributions