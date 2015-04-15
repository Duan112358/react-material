var React = require('react');

module.exports = React.createClass({
    displayName: '500',
    render: function(){
        return (
            <div className="content">
                <div className="content-heading">
                    <div className="container">
                        <h1 className="heading">500!</h1>
                    </div>
                </div>
                <div className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10">
                                <h2 className="content-sub-heading">Oops! Something went wrong...</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in massa vitae nisl hendrerit sollicitudin at vel purus. Quisque leo est, posuere a dignissim id, posuere non quam. Nulla dapibus quis leo eu pulvinar. Phasellus ultrices condimentum dolor, non condimentum nibh. Curabitur tempor sollicitudin eros vitae posuere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
