gext_table = {
    "arcadia":".tap",
    "manager":".tap",
    "galaxians":".tap",
    "horaceskiing":".tap",
    "hungryhorace":".rom",
    "planetoids":".rom",
    "raiders":".tap",
    "3dtanx":".tap",
    "birdsandbees":".tap",
    "combatzone":".tap",
    "dictator":".tap",
    "froggy":".tap",
    "harrier":".tap",
    "highnoon":".tap",
    "horacespiders":".rom",
    "calavera":".tap",
    "chaos":".tap",
    "chuckieegg":".tap",
    "egghead3":".tap",
    "egghead4":".tap",
    "ericfloaters":".tap",
    "lunacrabs":".tap",
    "maziacs":".tap",
    "minedout":".tap",
    "mooncresta":".tap",
    "motos":".tap",
    "panamajoe":".tap",
    "pheenix":".tap",
    "pinball":".tap",
    "pool":".tap",
    "quazatron":".tap",
    "rex":".tap",
    "speccies":".tap",
    "spectipede":".tap",
    "stopexpress":".tap",
    "trapdoor2":".tap",
    "trashman":".tap",
    "vulcan":".tap",
    "whb":".tap",
}

function gext(fn)
{
    if (fn in gext_table)
        return gext_table[fn];
    else        
        return ".z80";
}