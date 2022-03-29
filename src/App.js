import { useEffect } from 'react'
import { HostedFields, FieldTypes } from 'hosted-fields-sdk'
import "./styles.css";

const style = `
  /* RenderAsFloatingLabel */

  .single-iframe-input-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  /* Creditcard field */
  .single-iframe-input-container > div:nth-child(1),
  .single-iframe-input-container > div:nth-child(2) {
    width: 100%;
    margin-bottom: 14px;
  }

  .single-iframe-input-container > div {
    width: calc(50% - 7px);
  }

  .hosted-input-container .input-container input {
    border-radius: 2px!important;
    font-size: 14px;
  }

  #cvv-icon-container .icon {
    null
  }

  .creditcardNumber-container #creditcard-icon-container .creditcard-icon.default {
    null
  }

  #expiry_mm_yyyy-icon-container .icon {
    null
  }

  .label-input-floating {
    top: 32.5%!important;
    color: #222324 !important;
    font-size: 14px !important;
    opacity: 0.7 !important;
  }

  .label-input-floating.active {
    margin-top: -12px !important;
  }

  #label-cccard.label-input-floating.active,
  .hosted-input-container .input-container .label-input-floating.active {
    padding-left:46px!important;
    transform: scale(1)!important;
    font-size: 0.8rem!important;
  }


  html {
    background-color: transparent !important;
    min-width: 0;
  }

  .hosted-input-container {
    margin: 0px;
    background-color: transparent;
  }

  .control:not(:last-child) {
    margin-bottom: 0;
  }

  .label {
    display: none;
    color: rgb(65, 65, 65); 
    font-weight: normal;
    margin-bottom: 0px !important;
  }

  .input:focus {
    border-color:  #989898 !important;
  }

  ::placeholder {
    color: #222324;
  }  

  .hosted-input-container .input-container input {
    height: 52px;
    font-size: 14px;
    border-color:  #cccccc ;
    color: #222324; 
    background-color: #ffffff !important; 
    box-shadow: none;
    border-radius: 2px;
    letter-spacing: 0;
  }

  .creditcardNumber-container input, .cvv-container input, #expirymmyyyy-input {
    letter-spacing: 1.7px;
  }

  .cvv-container input {
    background-color: #ffffff !important;
  }

  .hosted-input-container .input-container {
    overflow: hidden;
  }

  .hosted-input-container .input-container .form-error {
    top: 18px !important; 
  }
  .hosted-input-container .input-container input.error {
    border: 1px solid #ff3767 !important;
    opacity: 0.6;
  }
  .hosted-input-container .input-container input.error:focus {
    border: 1px solid  #cccccc !important;
    opacity: 1;
  }`


export default function App() {

  useEffect(() => {
    // Configure your fields
  let fieldConfig = [
    {
        type: FieldTypes.TEXT,
        id: 'frmNameCC',
        autocomplete: 'cc-name',
        key: 'creditcard.main.name',
        helpKey: 'Testing',
        helpkey: 'Testing',
        name: 'ccname',
        noAttributeValueFormatting: true,
        required: true,
        requiredNewPayment: true,
        requiredRepeatPayment: false,
        showIcon: true,
        value: undefined,
        visible: true,
        visibleOnNewPayment: true,
        visibleOnRepeatPayment: false
    },
    {
        type: FieldTypes.CREDITCARD_NUMBER,
        autocomplete: "cc-number",
        helpKey: "Kortnummer",
        id: "frmCCNum",
        key: "creditcard.main.number",
        name: "cardnumber",
        noAttributeValueFormatting: true,
        required: true,
        requiredNewPayment: true,
        requiredRepeatPayment: false,
        showIcon: true,
        value: undefined,
        visible: true,
        visibleOnNewPayment: true,
        visibleOnRepeatPayment: false
    },
    {
        type: FieldTypes.EXPIRY_MM_YYYY,
        autocomplete: "cc-exp",
        helpKey: "•• / ••",
        id: "frmCCExp",
        key: "creditcard.main.expirymmyyyy",
        name: "cc-exp",
        noAttributeValueFormatting: true,
        pattern: "[0-9]*",
        required: true,
        requiredNewPayment: true,
        requiredRepeatPayment: false,
        showIcon: true,
        value: undefined,
        visible: true,
        visibleOnNewPayment: true,
        visibleOnRepeatPayment: false
    },
    {
        type: FieldTypes.CVV,
        autocomplete: "cc-csc",
        helpKey: "Security Code",
        id: "frmCCCVC",
        key: "creditcard.main.cvc",
        name: "cvc",
        noAttributeValueFormatting: true,
        pattern: "[0-9]*",
        required: true,
        requiredNewPayment: true,
        requiredRepeatPayment: true,
        showIcon: true,
        value: undefined,
        visible: true,
        visibleOnNewPayment: true,
        visibleOnRepeatPayment: true
    }
  ]

    HostedFields.setup({
      merchantId: 1014,
      renderMode: 'single', // render all fields in a single iframe
      hostedfieldsurl: 'https://test-hostedpages.paymentiq.io/1.0.31/index.html',
      fields: fieldConfig,
      service: '',
      styles: style,
      callback: () => {},
      onLoadCallback: () => { return () => {} },
      autoFocusNext: true,
      el: `#hosted-fields-wrapper`
    })
  })

  return (
    <>
    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div id='hosted-fields-wrapper' />
    </div>
    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    </>
  );
}
