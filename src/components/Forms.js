import React, {Component} from 'react'

export default class Forms extends Component {
  constructor (){
    super()
    this.state ={
      inputName:'',
      inputPassword:'',
      inputRemember:true
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  handleChange = (e) =>{
    console.log('handleChange')
    console.log(e.target.checked)
    this.setState({inputRemember: e.target.checked})
  }


  render(){
    return (
      <div>
        <h4>Iniciar Sesión</h4>
        <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor='name'>Nombre:</label>
          <input
            id='name'
            name='userName'
            onChange={e => this.setState({inputName: e.target.value})}
            placeholder='nombre de usuario o mail'
            ref={inputElement => this.inputName = inputElement}
            value={this.state.inputName} />
            </p>

        <p>
          <label htmlFor='Contraseña'>Contraseña:</label>
          <input
            id='contraseña'
            name='userPassword'
            onChange={e => this.setState({inputPassword: e.target.value})}
            placeholder='contraseña'
            value={this.state.inputPassword} />
        </p>
        <p>
          <label>
            <input
            checked={this.state.inputRemember}
            onChange={this.handleChangetype}
            type='checkbox' />
            ¿Recordar contraseña?

            </label>
            </p>

            <p><button>Iniciar Sesión</button></p>
            <p><button>Olvidé mi contraseña</button></p>
            <button>Nuevo Usuario</button>

            </form>
        </div>
    )
  }
}
