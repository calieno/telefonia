import { telefone } from "@models/telefone";


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createContact( name: string, phone: string ) {
  const contact = await prisma.contact.create( {
    data: {
      name,
      phone,
    },
  } );
  console.log( `Created contact with id ${contact.id}` );
}

async function updateContact( id: number, phone: string ) {
  const contact = await prisma.contact.update( {
    where: {
      id,
    },
    data: {
      phone,
    },
  } );
  console.log( `Updated contact with id ${contact.id}` );
}

async function deleteContact( id: number ) {
  await prisma.contact.delete( {
    where: {
      id,
    },
  } );
  console.log( `Deleted contact with id ${id}` );
}

async function listContacts() {
  const contacts = await prisma.contact.findMany();
  console.log( "Contacts:" );
  console.table( contacts );
}

async function main() {
  await prisma.$connect();

  console.log( "Creating contacts..." );
  await createContact( "John Doe", "555-1234" );
  await createContact( "Jane Doe", "555-5678" );

  console.log( "Updating contact..." );
  await updateContact( 1, "555-4321" );

  console.log( "Listing contacts..." );
  await listContacts();

  console.log( "Deleting contact..." );
  await deleteContact( 2 );

  console.log( "Listing contacts..." );
  await listContacts();

  await prisma.$disconnect();
}

main();



export { userController };
