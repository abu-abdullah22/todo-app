/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Tabs = ({ todos }) => {



    const tabs = ['All', 'Open', 'Completed'];

    return (
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === 'All' ? todos.length :
                tab === 'Open' ? todos.filter(val => !val.complete).length : 
                todos.filter(val => val.complete).length ;

                return (
                    <button className="tab-button" key={tabIndex}><h4>{tab} <span>({numOfTasks})</span></h4></button>
                )
            })}
        </nav>
    );
};

export default Tabs;