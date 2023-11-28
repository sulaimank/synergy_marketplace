from hashlib import sha256
from time import perf_counter
import secrets


def calculateNonce(length=10):
    """Calculate a random nonce with length number of bytes"""
    return secrets.token_hex(length)


def find_random_hash_with_difficulty(input_string, difficulty):
    """This method will attempt to calculate a random nonce with a difficulty.
       The difficulty means that the nonce will have 0 * difficulty numbers preceding the hash"""
    attempts = 1
    prefix = '0' * difficulty

    # Start performance clock
    start = perf_counter()

    # Try to generate / mine a hash that is SHA-256 encrypted that has a difficulty which means
    # that the hash will have preceding numbers.  If max attempts has exceeded then stop the mining
    # Input String: When there are four members in your team the input format will be -
    #       FirstName1 FirstName2 FirstName3 FirstName4 NONCE)
    nonce = calculateNonce()
    while True:
        sha256_random_hash = sha256(f'{input_string} {nonce}{attempts}'.encode()).hexdigest()
        attempts += 1
        if sha256_random_hash.startswith(prefix):
            print(f"Found Hash {sha256_random_hash}")
            break
        if attempts >= 100_000_000_000:
            print("Max attempts reached!")
            attempts = -1
            break
        elif attempts % 1000:
            nonce = calculateNonce()
            print(f"Attempts {attempts}, New nonce {nonce}")


    # Stop performance clock
    end = perf_counter()

    duration = end - start
    if attempts != -1:
        print(f"Solved hash {sha256_random_hash} with difficulty {difficulty} with attempts {attempts}")
        return sha256_random_hash, attempts, duration
    else:
        return "", attempts, duration

# difficulty is for numbers of 0's wanted
maxZeroHash = -1
highlyRandomizedHash = ""
totalAttempts = 0


MIN_DIFFICULTY_LEVEL = 4
MAX_DIFFICULTY_LEVEL = 11
duration = 0

# Let's try to mine a hash that has X preceding zero's.  The more
# preceding zero's your hash is difficult to generate
for difficulty in range(MIN_DIFFICULTY_LEVEL, MAX_DIFFICULTY_LEVEL):
    print(f"Trying to generate a hash with difficulty of {difficulty}")

    HASH_INPUT_STRING = "Marco Daman Sulaiman William"
    mined_hash, attempts, duration = find_random_hash_with_difficulty(HASH_INPUT_STRING, difficulty)

    totalAttempts += attempts

    if attempts == -1:
        print("Exceeded max attempts and did not find a sha256 hash")
        break
    elif difficulty > maxZeroHash:
        print(f"Increasing difficulty from {maxZeroHash} to {difficulty} with hash of {mined_hash}")
        maxZeroHash = difficulty
        highlyRandomizedHash = mined_hash



# Summary of mining a SHA-256 hash that has the highest difficulty within X number of attempts
if maxZeroHash > -1:
    print(f'Found hash: {mined_hash}')
    print(f'Number of attempts: {totalAttempts}')
    print(f'Execution time: {duration:.15f} seconds')

    print(f"Number of preceding zero: {maxZeroHash}")
    print(f"The hash with highest preceding zero: {highlyRandomizedHash}")
else:
    print("We were not able to determine a hash that meets minimum difficulty level of 5")
