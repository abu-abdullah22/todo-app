const Tabs = () => {
    
    const tabs = ['All', 'Open', 'Completed'] ;

    return (
        <nav className="tab-container">
            {tabs.map((tab, tabIndex)=> {
                return (
                    <button className="tab-button" key={tabIndex}><h4>{tab}(0)</h4></button>
                )
            })}
        </nav>
    );
};

export default Tabs;