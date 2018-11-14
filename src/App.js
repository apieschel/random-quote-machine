import React, { Component } from 'react';
import './App.css';

const BANK = [
		{quote: "After some further crooked questions from these bourgeois, the secret of their 'sympathy' for widows, poor families and so on emerges into the daylight.", author: "Karl Marx"},
		{quote: "Although Ure’s work appeared in 1835, at a time when the factory system was still comparatively little developed, it remains the classical expression of the spirit of the factory, not only because of its undisguised cynicism, but also because of the naiveté with which it blurts out the thoughtless contradictions of the capitalist brain.", author: "Karl"},
		{quote: "It is evident that the British Parliament, which no one will reproach with being excessively endowed with genius, has been led by experience to the conclusion that a simple compulsory law is sufficient to enact away all the so-called impediments opposed by the nature of the process to the restriction and regulation of the working day.", author: "Marx"},
		{quote: "(stony-hearted fellow!)", author: "Karl Marx"},
		{quote: "(this is the ‘abstinence’ of the capitalist!)", author: "Karl Marx"},
		{quote: "This passage demonstrates both the strengths and weaknesses of the kind of criticism which knows how to judge and condemn the present, but not how to comprehend it.", author: "Karl Marx"},
		{quote: "(!)", author: "Karl Marx"},
		{quote: "Apart from Liebig’s incorrect interpretation of the word ‘labour’, a word he used in quite a different sense from that adopted by political economy, it is, in any case, ‘very remarkable’ that he should make John Stuart Mill the first proponent of a theory which James Anderson was the first to publish, in the days of Adam Smith, and which was repeated in various works down to the beginning of the nineteenth century; a theory which Malthus, that master in plagiarism (his whole population theory is a shameless plagiarism), appropriated in 1815; which West developed at the same time and independently of Anderson; which in the year 1817 was linked by Ricardo with the general theory of value, then made the round of the world as Ricardo’s theory, and in 1820 was vulgarized by James Mill, the father of John Stuart Mill; and which was finally reproduced by John Stuart Mill and others as a dogma already quite commonplace, and known to every schoolboy. It is undeniable that the second Mill owes his certainly ‘remarkable’ authority almost entirely to such mistaken attributions.", author: "Karl Marx"}
];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
				author: BANK[0].author,
				index: 0,
				message: BANK[0].quote,
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentDidMount() {
    this.setState({
			index: 1
		});
  }
		
	handleClick(event) {
		console.log(this.state.index);
		if(this.state.index >= 0 && this.state.index <= BANK.length - 2) {
				this.setState({
						index: this.state.index + 1
				});
		} else {
				this.setState({
						index: 0
				});
		}
			
		this.setState({
			message: BANK[this.state.index].quote,
			author: BANK[this.state.index].author
		});
  }
		
  render() {
		return (
      <div className="App" id="quote-box">
        <header className="App-header">
          <p id="text">
            {this.state.message}
          </p>
					<p className="credit" id="author">- {this.state.author}</p>
					<p className="twitter"><a href={"https://twitter.com/intent/tweet?text=" + this.state.message + ' - ' + this.state.author} id="tweet-quote"><i className="fab fa-twitter"></i></a></p>
					<button className="revolution" id="new-quote" onClick={this.handleClick}>Dunk on Bourgeois Economist</button>
				 </header>
      </div>
    );
  }
}

export default App;
