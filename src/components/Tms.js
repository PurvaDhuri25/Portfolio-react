const Tms = () => {
  return (
    <div className="Tms">
      <link
        href="https://fonts.googleapis.com/css?family=Karla:400,700"
        rel="stylesheet"
      />
      <div id="section3">
        <a id="tellme" class="js--wp-3" name="tellme" />
        <div class="row">
          <div class="container">
            <h1 class="tellme-title">Tell Me Something</h1>
            <br />
            <br />
            <div class="form-inner-wrapper">
              <form id="tellmeForm" onsubmit="return(validate());">
                <div class="field-list clear">
                  <div id="name" class="form-item field email required">
                    <label class="title" for="name">
                      Name <span class="required">*</span>
                    </label>
                    <input
                      class="field-element"
                      name="name"
                      x-autocompletetype="name"
                      type="text"
                      spellcheck="false"
                    />
                  </div>

                  <div id="email" class="form-item field email required">
                    <label class="title" for="email">
                      Email Address <span class="required">*</span>
                    </label>
                    <input
                      class="field-element"
                      name="email"
                      x-autocompletetype="email"
                      type="text"
                      id="email-field"
                    />
                  </div>
                  <div id="phone" class="form-item field phone required">
                    <label class="title" for="email">
                      Phone{" "}
                    </label>
                    <input
                      class="field-element"
                      name="phone"
                      x-autocompletetype="phone"
                      type="text"
                      id="phone-field"
                    />
                  </div>
                  <div
                    id="textarea"
                    name="message"
                    class="form-item field textarea required"
                  >
                    <label class="title" for="textarea-field">
                      Message
                    </label>
                    <textarea
                      class="field-element"
                      id="textarea--field"
                      name="message"
                    ></textarea>
                  </div>
                  <div id="tellmeResponse"></div>
                  <div class="form-button-wrapper form-button-wrapper--align-center">
                    <input
                      class="button"
                      type="submit"
                      name="submit"
                      value="Submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tms;
