interface IGreeter {
    greet(name: string): string
}

interface Logger {
    location: string;
    date: Date;
    accent: string;
}

class Greeter implements IGreeter, Logger {
    greet(name: string): string {
      return `Hello ${name}`;
    }
  
    constructor(
      public location: string,
      public accent: string,
      public date: Date
    ) {}
  }
  
  const myGreeter = new Greeter("Downpatrick", "Northern Irish", new Date());
  
  abstract class School {
    static locator() {
      console.log("I'm right here!");
    }
  
    constructor(readonly name: string) {}
  
    abstract getStudentTypes(): string[];
  }
  
  class GoogleMaps {
    static locator() {
      console.log("Here I am");
    }
  }
  
  class PreSchool extends School implements GoogleMaps {
    getStudentTypes(): string[] {
      return ["preschooler"];
    }
  }
  
  let school = new PreSchool("Shiny Happy People Holding Hands");
  console.log(school.getStudentTypes());
  console.log(PreSchool.locator());
  
  class Logs {
    log() {
      console.log("Logs method");
    }
  }
  
  class Logs2 {
    log() {
      console.log("Logs2 method");
    }
  }
  
  class BestLoggerEver implements Logs, Logs2 {
    log() {
      console.log("This will get called!");
    }
  }