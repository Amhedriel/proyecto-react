import PropTypes from 'prop-types';

function Boton(props) {
  const estilosBoton = { 
    backgroundColor: props.color,
    color: 'var(--blanco)',
    cursor: 'pointer',
    padding: '8px',
    display: 'block',
    margin: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '5px',
    textDecoration: 'none',
  };
  
  return (
    <button style={estilosBoton} onClick={props.onClick}>{props.texto}</button>
  );

}

Boton.propTypes = {
  color: PropTypes.string,
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Boton;
