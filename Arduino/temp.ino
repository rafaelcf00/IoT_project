#include <OneWire.h>
#include <DallasTemperature.h>

#define DSl8b20 2
OneWire ourWire(DSl8b20);
DallasTemperature sensors(&ourWire);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  sensors.begin();
  delay(1000);
}

void loop() {
  // put your main code here, to run repeatedly:
  sensors.requestTemperatures();
  Serial.print("Temperatura: ");
  Serial.print(sensors.getTempCByIndex(0));
  Serial.println(" °C");
  delay(1000);
}
