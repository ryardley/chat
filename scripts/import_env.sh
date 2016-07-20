# Import the env file to the script
ENV_FILE=$1

if [[ "$ENV_FILE" == "" ]]; then
  ENV_FILE=.env
fi

while read line; do
  export $line
done < $ENV_FILE
