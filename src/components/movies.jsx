import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'

export default class Movies extends Component {
  state = {
    movies: getMovies(),
  }

  handleDelete = movie => {
    let newMovies = this.state.movies.filter(function(m){
        return m != movie
    })
    this.setState({movies: newMovies})
  }

  render() {
    return (
      <React.Fragment>
        {this.state.movies.length > 0 ? <div>
            <p>Showing {this.state.movies.length} movies in the database</p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.movies.map((movie) => 
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button className='btn btn-danger' onClick={() => this.handleDelete(movie)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div> 
        :'There are no movies in the database'}       
      </React.Fragment>
    )
  }
}
