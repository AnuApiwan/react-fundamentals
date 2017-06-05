// app/containers/PromptContainer.js
var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            username: 'anu'
        }
    },
    handleUpdateUser: function (event) {
        // console.log(event.target)
        this.setState({
            username: event.target.value
        });
    },
    handleSubmitUser: function (e) {
        e.preventDefault();
        var username = this.state.username;
        this.setState({
            username: ''
        });
        // console.log(this.props);

        if (this.props.routeParams.playerOne) {
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username,
                }
            })
        } else {
            this.context.router.push('/playerTwo/' + this.state.username)
        }

    },
    render: function () {
        // console.log(this.props);
        // console.log(this);
        return (
            <Prompt
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username} />
        )
    }
});

module.exports = PromptContainer;