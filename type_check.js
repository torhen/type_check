"use strict"

function type_check(){
  for(let i=0; i< arguments.length; i=i+2){
      let para = arguments[i]
      let exp_type = arguments[i+1] // expected type

      // replace shortcuts
      if (exp_type === 'str') exp_type = 'string'
      else if (exp_type === 'int')  exp_type = 'integer'
      else if (exp_type === 'bool') exp_type = 'boolean'
      else if (exp_type === 'func') exp_type = 'function'

      // find out type of the parameter, most freqent types first
      let para_type
      if (para === null) para_type = 'null'
      else if (para === undefined) para_type = 'undefined'
      else if ((para).constructor === Number)  para_type = 'number'
      else if ((para).constructor === String)  para_type = 'string'
      else if ((para).constructor === Boolean) para_type = 'boolean'
      else if ((para).constructor === Object)  para_type = 'object'
      else if ((para).constructor === Array)   para_type = 'array'
      else if ((para).constructor === Date)    para_type = 'date'
      else if ((para).constructor === Function)para_type = 'function'
      else if ((para).constructor === RegExp)  para_type = 'regexp'
      else if ((para).constructor === Error)   para_type = 'error'
      else if ((para).constructor === Symbol)  para_type = 'symbol'

      // of cause there is no real integer in js 
      if( exp_type === 'integer' 
          && para_type == 'number' 
          && Number.isInteger(para)) para_type = 'integer'

      // check if type is correct
      if(para_type !== exp_type){
          let s = ''
          s += 'type_check() ' 
          s += 'parameter [' + (i/2) + '] = '
          s += para
          s += ' (expect ' 
          s += exp_type
          s += ' but received ' + para_type + ')'
          throw new Error(s)
     }
  }
}

