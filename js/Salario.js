class salario {
    /**
     * Construtor da classe
     * @param {number} pSalarioBruto Primeiro número
     */
    constructor(pSalarioBruto) {
      /**
       * Inicialização
       */
      this._salarioBruto = undefined;
    
      this._validarParametro(pSalarioBruto);
        
      this._salarioBruto = pSalarioBruto;

      this._efetuarCalculosINSS();
      
      this._efetuarCalculosIRPF();

      this._efetuarCalculosLiquido();

      this._efetuarCalculosTotalDescontos();

      Object.freeze(this);
    }

    _efetuarCalculosINSS() {

        if (this._salarioBruto <= 1693.72){
            this._descontoINSS = ((this._salarioBruto/100)*8);
        }
            else{
                if ((this._salarioBruto >= 1693.73) && (this._salarioBruto <= 2822.90)){
                     this._descontoINSS = ((this._salarioBruto/100)*9);
                }
                else{
                    if ((this._salarioBruto >= 2822.91) && (this._salarioBruto <= 5645.80)){
                         this._descontoINSS = ((this._salarioBruto/100)*11); 
                    }   
                        else{
                            this._descontoINSS = 621.04;
                        }    
                }                
            }
    }
    
    _efetuarCalculosIRPF(){
        this._baseIRPF = this._salarioBruto - this._descontoINSS;
       
        if (this._baseIRPF <= 1903.98){
            this._descontoIRPF = 0;
        }
            else{
                if((this._baseIRPF >= 1903.99) && (this._baseIRPF <= 2826.65)){
                    this._descontoIRPF = (((this._baseIRPF/100)*7.5) - 142.8); 
                }
                    else{
                        if ((this._baseIRPF >= 2826.66) && (this._baseIRPF <= 3751.05)){
                            this._descontoIRPF = (((this._baseIRPF/100)*15)- 354.8); 
                        }   
                            else{
                                if ((this._baseIRPF >= 3751.06) && (this._baseIRPF <= 4664.68)){
                                    this._descontoIRPF = ((this._baseIRPF/100)*22.5 - 636.13);
                                }      
                                    else {
                                        this._descontoIRPF = (((this._baseIRPF/100)*27.5) - 869.36);
                                    }        
                            }         
                    }
            }                      
    }

    _efetuarCalculosLiquido(){
        this._salarioLiquido = (this._salarioBruto - (this._descontoINSS + this._descontoIRPF));
    }
   
    _efetuarCalculosTotalDescontos(){
        this._totalDescontos = (this._descontoINSS + this._descontoIRPF);
    }

    _validarParametro(valor) {
        if (typeof valor !== 'number'){
        throw new Error('O tipo do operando deve ser number!');
        }
            else{
                if (valor <= 0){
                throw new Error('O operador deve ser maior ou igual a 0!');
                }
            }
    }  

    get salarioBruto() {
        return this._salarioBruto.toFixed(2);
    }
    
      get descontoINSS() {
        return this._descontoINSS.toFixed(2);
    }
    
    get descontoIRPF() {
        return this._descontoIRPF.toFixed(2);
    }

    get totalDescontos() {
        return this._totalDescontos.toFixed(2);
    }
    
    get salarioLiquido() {
        return this._salarioLiquido.toFixed(2);
    }
}