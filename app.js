const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
function imprimir(data) {
  let printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: "//localhost/impresora",
  });

  data.map(({ align, putline, put, newline }, item) => {
    if (!(align === void 0)) {
      if (align === "center") {
        printer.alignCenter(); // Align text to center
      }
      if (align === "left") {
        printer.alignLeft(); // Align text to left
      }

      if (align === "rigth") {
        printer.alignRight(); // Align text to right
      }
    }
    if (!(putline === void 0)) {
      printer.println(putline);
    }

    if (!(put === void 0)) {
      printer.println(put);
    }

    if (!(newline === void 0)) {
      printer.newLine();
    }
  });

  printer.cut();

  try {
    let execute = printer.execute().then(() => {
      console.error("Print done!");
    });
  } catch (error) {
    console.log("Print failed:", error);
  }
}

module.exports = imprimir;
