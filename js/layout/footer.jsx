var React = require('react');

module.exports = React.createClass({
    displayName: 'Footer',
    componentDidMount: function(){
        $('body').css('margin-bottom', $('.footer').outerHeight());
    },
    render: function(){
        return (
            <footer className="footer">
                <p>Material</p>
            </footer>
        )
    }
});
